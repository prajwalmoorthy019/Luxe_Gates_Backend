const { hashPassword } = require("./hashPassword");

(async () => {
    const password = "Admin@123";

    const hashedPassword = await hashPassword(password);

    console.log("Plain Password :", password);
    console.log("Hashed Password:");
    console.log(hashedPassword);
})();