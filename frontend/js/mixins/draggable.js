export default {
  data: function () {
    return {
      animation: 150,
      handle: '.drag__handle',
      ghostClass: 'sortable-ghost',
      chosenClass: 'sortable-chosen',
      dragClass: 'sortable-drag',
      scrollSensitivity: 30
    }
  },
  computed: {
    dragOptions: function () {
      return {
        animation: this.animation,
        handle: this.handle,
        ghostClass: this.ghostClass,
        chosenClass: this.chosenClass,
        dragClass: this.dragClass,
        scrollSensitivity: this.scrollSensitivity
      }
    }
  }
}
