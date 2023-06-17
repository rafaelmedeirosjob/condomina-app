import Model from '../sequelize';
import aws from 'aws-sdk'
import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
const s3 = new aws.S3()
const { Condominios, Documentos } = Model;

const findAll = async (condominio) => {
  let whereCondo =
  condominio
    ? { required: true, where: { id: condominio } }
    : '';

const query = {
  include: [
    {
      model: Condominios,
      ...whereCondo
    }
  ]
};

return await Documentos.findAll(query);
  
};

const add = async data => {
  if(!data.file.location)
  {
    data.file.location = `http://localhost:3001/files/${data.file.filename}`
  }
    const arquivo = {
      nome: data.file.originalname,
      tamanho: data.file.size,
      key: !data.file.filename ? data.file.key : data.file.filename,
      url: data.file.location,
      condominio_id: data.params.id
    }
    return await Documentos.create(arquivo)
};

const destroy = async pk => {
  const arquivo = await Documentos.findByPk(pk)
  if (!arquivo) {
    throw 'arquivo não encontrado'
  }
  if(process.env.APP_MODE==='production')
  {
    s3.deleteObject({
      Bucket: 'condomina',
      Key: arquivo.key,
    }).promise()
  } else
  {
    promisify(fs.unlink)(path.resolve(__dirname,'..','..','..','tmp', 'uploads', arquivo.key))
  }

  return await arquivo.destroy()
};

export default { findAll, add,  destroy };
