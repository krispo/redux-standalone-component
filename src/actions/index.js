export const SOME_ACTION = 'SOME_ACTION';

export default function action(id, value){
  return {
    type: SOME_ACTION,
    id,
    value
  }
}