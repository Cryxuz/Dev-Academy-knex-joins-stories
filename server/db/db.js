import connection from './connection.js'

export async function getWombles() {
  const result = await connection('wombles').select('*')
  return result
}

export async function getWombleWithTrait(id) {
  const result = await connection('wombles')
    .join('traits', 'wombles.trait_id', 'traits.id')
    .select('wombles.id', 'name', 'description')
    .where('wombles.id', id)

  return result
}

export async function getWombleWithRubbish() {
  try {
    const result = await connection('wombles')
      .join('rubbish', 'wombles.rubbish_id', 'rubbish.id')
      .select(
        'wombles.name as name',
        'rubbish.name as assign',
        'rubbish.id as rubbish'
      )
    return result
  } catch (err) {
    console.log(err)
    throw err
  }
}
