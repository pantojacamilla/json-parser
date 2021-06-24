    function updateBlock() {&#xD;&#xA;        let response3 = axios.get(`https://chain.ragnaproject.io/api/getblockcount`)&#xD;&#xA;        .then((response3) => {&#xD;&#xA;            return Promise.resolve(response3);&#xD;&#xA;        }).catch((error) => {&#xD;&#xA;            console.log("Can not connect to API");&#xD;&#xA;            console.log(error);&#xD;&#xA;            return Promise.resolve({&#xD;&#xA;                failed: true&#xD;&#xA;            })&#xD;&#xA;        });&#xD;&#xA;        response3.then((response3)=> {&#xD;&#xA;            if (response3.failed) {&#xD;&#xA;                console.log("API Response Failed");&#xD;&#xA;                return response3;&#xD;&#xA;            }&#xD;&#xA;            let b = response3.data;&#xD;&#xA;            try {&#xD;&#xA;                Client.user.setActivity("Blocks: " + b, { type: 'WATCHING' })&#xD;&#xA;                .then()&#xD;&#xA;                .catch(console.error);&#xD;&#xA;            } catch(err) {&#xD;&#xA;                console.log("This is an API error catch");&#xD;&#xA;                console.log(err);&#xD;&#xA;            }&#xD;&#xA;        });&#xD;&#xA;    }&#xD;&#xA;    Client.on("ready", () => {&#xD;&#xA;        console.log(botName + " online!");&#xD;&#xA;        updateBlock();&#xD;&#xA;        setInterval(() => {&#xD;&#xA;            updateBlock();&#xD;&#xA;        }, 10000);&#xD;&#xA;    });