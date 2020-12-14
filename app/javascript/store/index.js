
import Vue from "vue/dist/vue.esm";
export const store = Vue.observable({
  form: {
    step: 1,
    job: {
      company_name: null,
      company_website: null,
      company_logo: null,
      company_description: null,
      compensation_range: null,
      compensation_type: null,
      description: null,
      estimated_hours: null,
      headquarters: null,
      link_to_apply: null,
      price: 199,
      base_price: 199,
      remote: "Yes",
      title: null,
      years_of_experience: null,
      upsell_type: "No, thanks"
    }
  }
})

export const actions = {
  updateForm(input, value) {
    store.form.job[input] = value;

    let storedForm = this.openStorage();
    if (!storedForm) storedForm = {};

    storedForm[input] = value;
    this.saveStorage(storedForm);
  },

  openStorage() {
    return JSON.parse(localStorage.getItem('form'));
  },

  saveStorage(form) {
    localStorage.setItem("form", JSON.stringify(form));
  },
};