import multer from 'multer';
import path from 'path';

export default {
  //ira salvar as imagens no proprio disco do PC
  //e o destination serve para falar aonde vai salvar
  //filename = gerar o nome do arquivo
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`;

      cb(null, fileName);
    },
  }),
};
