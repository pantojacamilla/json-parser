    function randomZip() {&#xD;&#xA;      return Math.floor(Math.random() * 100);&#xD;&#xA;    }&#xD;&#xA;    var creditQuantity = randomZip();&#xD;&#xA;    function creditQuantityMultiplied() {&#xD;&#xA;      creditQuantity * 5;&#xD;&#xA;      return;&#xD;&#xA;    };&#xD;&#xA;    element(by.css("a[href='/credits']")).click();&#xD;&#xA;    element(by.css('input[name="count"]')).sendKeys(creditQuantity);&#xD;&#xA;    $('.text_per').click();&#xD;&#xA;    browser.sleep(1500);&#xD;&#xA;    var checkSumCredits = element(by.cssContainingText('.inline-block.price_credit.text_per', creditQuantityMultiplied()));&#xD;&#xA;    expect(checkSumCredits.isPresent()).toBeTruthy();