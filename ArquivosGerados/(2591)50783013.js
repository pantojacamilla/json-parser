    const delay = (time, value) => {&#xD;&#xA;      return Promise.resolve(); //  THIS WORKS&#xD;&#xA;      // NEED TO, but wont work&#xD;&#xA;      return new Promise(function(resolve) {&#xD;&#xA;        setTimeout(() => resolve(value), time);&#xD;&#xA;      });&#xD;&#xA;    };&#xD;&#xA;    const request = (count) => {&#xD;&#xA;      if (count === 15) return;&#xD;&#xA;      return makeRequest().then(&#xD;&#xA;        res => Promise.resolve() // if it works it works.&#xD;&#xA;      ).catch(&#xD;&#xA;        err => delay(1000).then(() => request(count - 1));&#xD;&#xA;      )&#xD;&#xA;    }&#xD;&#xA;    describe("on fail", () => {&#xD;&#xA;      beforeEach(() => jest.useFakeTimers());&#xD;&#xA;      it("should retry 15 times", async () => {&#xD;&#xA;        request();&#xD;&#xA;        jest.runTimersToTime(15001); // alias `advanceTimersByTime`&#xD;&#xA;        await expect(request.mock.calls.length).toBe(15); // what am i missing? or rather, what's jest missing?&#xD;&#xA;      });&#xD;&#xA;    });