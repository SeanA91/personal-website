import fs from 'node:fs';


export const config = {
    dir: {
        input: "src/_pages",
        includes: "../_includes",
        data: "../_data",
        output: "docs"
    }
};

const LAYOUT_FOLDER = './src/_includes/layouts';
const INPUT_FOLDER = config.dir.input;

export default function (eleventyConfig) {
    if (fs.existsSync(LAYOUT_FOLDER)) {
        fs.readdirSync(LAYOUT_FOLDER).forEach(file => {
            const alias = file.split('.')[0];
            const full_dir = "layouts/" + file;
            eleventyConfig.addLayoutAlias(alias, full_dir);
        });
    }
    const passthroughs = {}
    passthroughs[INPUT_FOLDER + '/robots.txt'] = '/robots.txt'
    passthroughs[INPUT_FOLDER + '/CNAME'] = '/CNAME'
    eleventyConfig.addPassthroughCopy(passthroughs);
};

