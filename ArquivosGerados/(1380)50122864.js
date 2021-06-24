    const firstNames = ['Emma','Noah','Olivia','Liam','Ava','William','Sophia']&#xD;&#xA;    const lastNames = ['Smith','Jones','Brown','Johnson','Williams']&#xD;&#xA;    // generate a random number between min and max&#xD;&#xA;    const rand = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min&#xD;&#xA;    // generate a name&#xD;&#xA;    const generateName = () => `${firstNames[rand(firstNames.length - 1)]} ${lastNames[rand(lastNames.length - 1)]}`&#xD;&#xA;    // generate a phone number&#xD;&#xA;    const generatePhoneNumber = () => `${rand(999, 100)}-${rand(999, 100)}-${rand(9999, 1000)}`&#xD;&#xA;    // create a person&#xD;&#xA;    const createContact = () => ({name: generateName(),&#xD;&#xA;                                 phone: generatePhoneNumber()})&#xD;&#xA;    // add keys to based on index&#xD;&#xA;    const addKeys = (val, key) => ({key, ...val})&#xD;&#xA;    // create an array of length NUM_CONTACTS &#xD;&#xA;    const contactList = Array.from({length: 5}, createContact).map(addKeys)&#xD;&#xA;    console.log(contactList)&#xD;&#xA;    const contactsOnly = Array.from({length: 5}, createContact).map(i=>i)&#xD;&#xA;    console.log(contactsOnly)&#xD;&#xA;    const contactsAdded =addKeys(contactsOnly)&#xD;&#xA;    console.log(contactsAdded)