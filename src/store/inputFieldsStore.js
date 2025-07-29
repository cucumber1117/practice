import { create } from 'zustand';

export const useInputFieldsStore = create((set) => ({
  fields: [''],
  setFields: (newFields) => set({ fields: newFields }),
  addField: () => set((state) => ({ fields: [...state.fields, ''] })),
  updateField: (index, value) =>
    set((state) => {
      const newFields = [...state.fields];
      newFields[index] = value;
      return { fields: newFields };
    }),
  removeField: (index) =>
    set((state) => {
      const newFields = state.fields.filter((_, i) => i !== index);
      return { fields: newFields };
    }),
}));
