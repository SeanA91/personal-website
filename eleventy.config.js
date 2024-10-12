import fs from 'node:fs';

const LAYOUT_FOLDER = './_includes/layouts';

export const config = {
    dir: {
        input: "_pages",
        includes: "../_includes"
    }
};

export default function (eleventyConfig) {
    if (fs.existsSync(LAYOUT_FOLDER)) {
        fs.readdirSync(LAYOUT_FOLDER).forEach(file => {
            const alias = file.split('.')[0];
            const full_dir = "layouts/" + file;
            eleventyConfig.addLayoutAlias(alias, full_dir);
        });
    }

};

