let { promises: fs } = require("fs");

main()

async function main() {

    let output = `<html lang="en"> NETLIFY DEV TEST </html> `

    await fs.mkdir("_site", { recursive: true })
    await fs.writeFile("_site/index.html", output, "utf8")

}