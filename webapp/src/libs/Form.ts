class Form {
  private data: {[key: string]: any} = {};

  constructor(
    private submit: (data: any) => boolean,
    private dataInterface: {[key: string]: string} = {}
  ) {
    console.log('Form constructor');
  }

  setKey(key: string, value: any) {
    this.data[key] = value;
  }

  submitForm() {
    return this.submit(this.data);
  }

  getData() {
    return this.data;
  }

  setData(data: {[key: string]: any}) {
    this.data = data;
  }

  clearData() {
    this.data = {};
  }

  verifyData() {
    for (const key in this.dataInterface) {
      if (!this.data[key]) {
        return false;
      }

      if (typeof this.data[key] !== this.dataInterface[key]) {
        return false;
      }
    }
    return true;
  }

  getErrors() {
    const errors: {[key: string]: string} = {};
    for (const key in this.dataInterface) {
      if (!this.data[key]) {
        errors[key] = 'Required';
      }

      if (typeof this.data[key] !== this.dataInterface[key]) {
        errors[key] = 'Invalid';
      }
    }
    return errors;
  }
}

export default Form;