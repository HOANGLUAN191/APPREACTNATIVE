export const selectKindergarten = (kindergartenId) => {
  return {
    type: 'select_kindergarten',
    payload: kindergartenId
  };
};
