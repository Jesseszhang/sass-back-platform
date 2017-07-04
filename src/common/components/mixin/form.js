module.exports = {
  methods: {
    /**
     * 表单控件的value值
     * @return {Number, Object}
     */
    val(newVal) {
      if (newVal !== undefined) {
        this.value = newVal;

        return this;
      }

      return this.value;
    },

    /**
     * 表单控件的text值
     * @return {String, Array, Object}
     */
    txt(newTxt) {
      if (newTxt !== undefined) {
        this.text = newTxt;
      }

      return this.text;
    }
  }
}