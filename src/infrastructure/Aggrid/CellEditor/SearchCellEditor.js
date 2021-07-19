// function to act as a class
function SearchCellEditor() {}

// gets called once before the renderer is used
SearchCellEditor.prototype.init = () => {
  // create the cell
  this.eInput = document.createElement('input')
  //   this.eInput.value = params.value
}

// gets called once when grid ready to insert the element
SearchCellEditor.prototype.getGui = () => this.eInput

// focus and select can be done after the gui is attached
SearchCellEditor.prototype.afterGuiAttached = () => {
  this.eInput.focus()
  this.eInput.select()
}

// returns the new value after editing
SearchCellEditor.prototype.getValue = () => this.eInput.value

// any cleanup we need to be done here
SearchCellEditor.prototype.destroy = () => {
  // but this example is simple, no cleanup, we could
  // even leave this method out as it's optional
}

// if true, then this editor will appear in a popup
SearchCellEditor.prototype.isPopup = () =>
  // and we could leave this method out also, false is the default
  false

export default SearchCellEditor
