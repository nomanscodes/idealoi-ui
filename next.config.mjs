import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(process.cwd(), "styles")],
        prependData: `
      @import "variables";
    `,
    },
};

export default nextConfig;
