import path from "path";

export default {
    webpack: {
        alias: {
            "@": path.join(__dirname, "src")
        }
    }
}