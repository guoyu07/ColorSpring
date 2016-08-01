
export const updatecolorfilter = ({ dispatch }, colorgroup) => {
    dispatch('UPDATECOLORFILTER', colorgroup)
}

export const togglegrid = ({ dispatch }, togglegridvalue) => {
    dispatch('TOGGLEGRID', togglegridvalue)
}

export const togglemodal = ({ dispatch }, togglemodalvalue) => {
    dispatch('TOGGLEMODAL', togglemodalvalue)
}