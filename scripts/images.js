const fs = require('fs');

const imageFileNames = () => {
  const array = fs
    .readdirSync('src/assets/images')
    .filter((file) => {
      return file.endsWith('.png')
        ? file.endsWith('.png')
        : file.endsWith('.jpg');
    })
    .map((file) => {
      return file.endsWith('.png')
        ? file.replace('@2x.png', '.png').replace('@3x.png', '.png')
        : file.replace('@2x.jpg', '.jpg').replace('@3x.jpg', '.jpg');
    });

  return Array.from(new Set(array));
};

const generate = () => {
  const properties = imageFileNames()
    .map((name) => {
      const filename = name.endsWith('.png')
        ? name.replace('.png', '')
        : name.replace('.jpg', '');

      return name.endsWith('.png')
        ? `${filename}: require('./${filename}.png'),`
        : `${filename}: require('./${filename}.jpg'),`;
    })
    .join('\n  ');
  const string = `export const Images = {
  ${properties}
};
`;

  fs.writeFileSync('src/assets/images/index.js', string, 'utf8');
};

generate();
