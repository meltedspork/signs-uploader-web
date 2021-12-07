const selectTransformLabelMap = (v: any) => v.map(({ name, uid }: any) => ({ label: name, value: uid }));
const selectTransformNameMap = (v: any) => v.map(({ label, value }: any) => ({ name: label, uid: value }));

export {
  selectTransformLabelMap,
  selectTransformNameMap,
}
