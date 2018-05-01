const universalStyles = {
  background: props => props.background,
  backgroundAttachment: props => props.backgroundAttachment,
  backgroundBlendMode: props => props.backgroundBlendMode,
  backgroundClip: props => props.backgroundClip,
  backgroundColor: props => props.backgroundColor,
  backgroundImage: props => props.backgroundImage,
  backgroundOrigin: props => props.backgroundOrigin,
  backgroundPosition: props => props.backgroundPosition,
  backgroundRepeat: props => props.backgroundRepeat,
  backgroundSize: props => props.backgroundSize,
  border: props => props.border,
  borderBottom: props => props.borderBottom,
  borderBottomColor: props => props.borderBottomColor,
  borderBottomLeftRadius: props => props.borderBottomLeftRadius,
  borderBottomRightRadius: props => props.borderBottomRightRadius,
  borderBottomStyle: props => props.borderBottomStyle,
  borderBottomWidth: props => props.borderBottomWidth,
  borderCollapse: props => props.borderCollapse,
  borderColor: props => props.borderColor,
  borderImage: props => props.borderImage,
  borderImageOutset: props => props.borderImageOutset,
  borderImageRepeat: props => props.borderImageRepeat,
  borderImageSlice: props => props.borderImageSlice,
  borderImageSource: props => props.borderImageSource,
  borderImageWidth: props => props.borderImageWidth,
  borderLeft: props => props.borderLeft,
  borderLeftColor: props => props.borderLeftColor,
  borderLeftStyle: props => props.borderLeftStyle,
  borderLeftWidth: props => props.borderLeftWidth,
  borderRadius: props => props.borderRadius,
  borderRight: props => props.borderRight,
  borderRightColor: props => props.borderRightColor,
  borderRightStyle: props => props.borderRightStyle,
  borderRightWidth: props => props.borderRightWidth,
  borderSpacing: props => props.borderSpacing,
  borderStyle: props => props.borderStyle,
  borderTop: props => props.borderTop,
  borderTopColor: props => props.borderTopColor,
  borderTopLeftRadius: props => props.borderTopLeftRadius,
  borderTopRightRadius: props => props.borderTopRightRadius,
  borderTopStyle: props => props.borderTopStyle,
  borderTopWidth: props => props.borderTopWidth,
  borderWidth: props => props.borderWidth,
  bottom: props => props.bottom,
  boxShadow: props => props.boxShadow,
  boxSizing: props => props.boxSizing,
  clear: props => props.clear,
  clip: props => props.clip,
  cursor: props => props.cursor,
  display: props => props.display,
  float: props => props.float,
  height: props => props.height,
  left: props => props.left,
  margin: props => props.margin,
  marginBottom: props => props.marginBottom,
  marginLeft: props => props.marginLeft,
  marginRight: props => props.marginRight,
  marginTop: props => props.marginTop,
  maxHeight: props => props.maxHeight,
  maxWidth: props => props.maxWidth,
  minHeight: props => props.minHeight,
  minWidth: props => props.minWidth,
  objectFit: props => props.objectFit,
  objectPosition: props => props.objectPosition,
  opacity: props => props.opacity,
  outline: props => props.outline,
  outlineColor: props => props.outlineColor,
  outlineOffset: props => props.outlineOffset,
  outlineStyle: props => props.outlineStyle,
  outlineWidth: props => props.outlineWidth,
  overflow: props => props.overflow,
  overflowWrap: props => props.overflowWrap,
  overflowX: props => props.overflowX,
  overflowY: props => props.overflowY,
  padding: props => props.padding,
  paddingBottom: props => props.paddingBottom,
  paddingLeft: props => props.paddingLeft,
  paddingRight: props => props.paddingRight,
  paddingTop: props => props.paddingTop,
  pointerEvents: props => props.pointerEvents,
  position: props => props.position,
  right: props => props.right,
  top: props => props.top,
  verticalAlign: props => props.verticalAlign,
  visibility: props => props.visibility,
  width: props => props.width,
  zIndex: props => props.zIndex,

  '&:active': {
    background: props => props.activeBackground,
    backgroundAttachment: props => props.activeBackgroundAttachment,
    backgroundBlendMode: props => props.activeBackgroundBlendMode,
    backgroundClip: props => props.activeBackgroundClip,
    backgroundColor: props => props.activeBackgroundColor,
    backgroundImage: props => props.activeBackgroundImage,
    backgroundOrigin: props => props.activeBackgroundOrigin,
    backgroundPosition: props => props.activeBackgroundPosition,
    backgroundRepeat: props => props.activeBackgroundRepeat,
    backgroundSize: props => props.activeBackgroundSize,
    border: props => props.activeBorder,
    borderBottom: props => props.activeBorderBottom,
    borderBottomColor: props => props.activeBorderBottomColor,
    borderBottomLeftRadius: props => props.activeBorderBottomLeftRadius,
    borderBottomRightRadius: props => props.activeBorderBottomRightRadius,
    borderBottomStyle: props => props.activeBorderBottomStyle,
    borderBottomWidth: props => props.activeBorderBottomWidth,
    borderCollapse: props => props.activeBorderCollapse,
    borderColor: props => props.activeBorderColor,
    borderImage: props => props.activeBorderImage,
    borderImageOutset: props => props.activeBorderImageOutset,
    borderImageRepeat: props => props.activeBorderImageRepeat,
    borderImageSlice: props => props.activeBorderImageSlice,
    borderImageSource: props => props.activeBorderImageSource,
    borderImageWidth: props => props.activeBorderImageWidth,
    borderLeft: props => props.activeBorderLeft,
    borderLeftColor: props => props.activeBorderLeftColor,
    borderLeftStyle: props => props.activeBorderLeftStyle,
    borderLeftWidth: props => props.activeBorderLeftWidth,
    borderRadius: props => props.activeBorderRadius,
    borderRight: props => props.activeBorderRight,
    borderRightColor: props => props.activeBorderRightColor,
    borderRightStyle: props => props.activeBorderRightStyle,
    borderRightWidth: props => props.activeBorderRightWidth,
    borderSpacing: props => props.activeBorderSpacing,
    borderStyle: props => props.activeBorderStyle,
    borderTop: props => props.activeBorderTop,
    borderTopColor: props => props.activeBorderTopColor,
    borderTopLeftRadius: props => props.activeBorderTopLeftRadius,
    borderTopRightRadius: props => props.activeBorderTopRightRadius,
    borderTopStyle: props => props.activeBorderTopStyle,
    borderTopWidth: props => props.activeBorderTopWidth,
    borderWidth: props => props.activeBorderWidth,
    bottom: props => props.activeBottom,
    boxShadow: props => props.activeBoxShadow,
    boxSizing: props => props.activeBoxSizing,
    clear: props => props.activeClear,
    clip: props => props.activeClip,
    cursor: props => props.activeCursor,
    display: props => props.activeDisplay,
    float: props => props.activeFloat,
    height: props => props.activeHeight,
    left: props => props.activeLeft,
    margin: props => props.activeMargin,
    marginBottom: props => props.activeMarginBottom,
    marginLeft: props => props.activeMarginLeft,
    marginRight: props => props.activeMarginRight,
    marginTop: props => props.activeMarginTop,
    maxHeight: props => props.activeMaxHeight,
    maxWidth: props => props.activeMaxWidth,
    minHeight: props => props.activeMinHeight,
    minWidth: props => props.activeMinWidth,
    objectFit: props => props.activeObjectFit,
    objectPosition: props => props.activeObjectPosition,
    opacity: props => props.activeOpacity,
    outline: props => props.activeOutline,
    outlineColor: props => props.activeOutlineColor,
    outlineOffset: props => props.activeOutlineOffset,
    outlineStyle: props => props.activeOutlineStyle,
    outlineWidth: props => props.activeOutlineWidth,
    overflow: props => props.activeOverflow,
    overflowWrap: props => props.activeOverflowWrap,
    overflowX: props => props.activeOverflowX,
    overflowY: props => props.activeOverflowY,
    padding: props => props.activePadding,
    paddingBottom: props => props.activePaddingBottom,
    paddingLeft: props => props.activePaddingLeft,
    paddingRight: props => props.activePaddingRight,
    paddingTop: props => props.activePaddingTop,
    pointerEvents: props => props.activePointerEvents,
    position: props => props.activePosition,
    right: props => props.activeRight,
    top: props => props.activeTop,
    verticalAlign: props => props.activeVerticalAlign,
    visibility: props => props.activeVisibility,
    width: props => props.activeWidth,
    zIndex: props => props.activeZIndex,
  },

  '&:focus': {
    background: props => props.focusBackground,
    backgroundAttachment: props => props.focusBackgroundAttachment,
    backgroundBlendMode: props => props.focusBackgroundBlendMode,
    backgroundClip: props => props.focusBackgroundClip,
    backgroundColor: props => props.focusBackgroundColor,
    backgroundImage: props => props.focusBackgroundImage,
    backgroundOrigin: props => props.focusBackgroundOrigin,
    backgroundPosition: props => props.focusBackgroundPosition,
    backgroundRepeat: props => props.focusBackgroundRepeat,
    backgroundSize: props => props.focusBackgroundSize,
    border: props => props.focusBorder,
    borderBottom: props => props.focusBorderBottom,
    borderBottomColor: props => props.focusBorderBottomColor,
    borderBottomLeftRadius: props => props.focusBorderBottomLeftRadius,
    borderBottomRightRadius: props => props.focusBorderBottomRightRadius,
    borderBottomStyle: props => props.focusBorderBottomStyle,
    borderBottomWidth: props => props.focusBorderBottomWidth,
    borderCollapse: props => props.focusBorderCollapse,
    borderColor: props => props.focusBorderColor,
    borderImage: props => props.focusBorderImage,
    borderImageOutset: props => props.focusBorderImageOutset,
    borderImageRepeat: props => props.focusBorderImageRepeat,
    borderImageSlice: props => props.focusBorderImageSlice,
    borderImageSource: props => props.focusBorderImageSource,
    borderImageWidth: props => props.focusBorderImageWidth,
    borderLeft: props => props.focusBorderLeft,
    borderLeftColor: props => props.focusBorderLeftColor,
    borderLeftStyle: props => props.focusBorderLeftStyle,
    borderLeftWidth: props => props.focusBorderLeftWidth,
    borderRadius: props => props.focusBorderRadius,
    borderRight: props => props.focusBorderRight,
    borderRightColor: props => props.focusBorderRightColor,
    borderRightStyle: props => props.focusBorderRightStyle,
    borderRightWidth: props => props.focusBorderRightWidth,
    borderSpacing: props => props.focusBorderSpacing,
    borderStyle: props => props.focusBorderStyle,
    borderTop: props => props.focusBorderTop,
    borderTopColor: props => props.focusBorderTopColor,
    borderTopLeftRadius: props => props.focusBorderTopLeftRadius,
    borderTopRightRadius: props => props.focusBorderTopRightRadius,
    borderTopStyle: props => props.focusBorderTopStyle,
    borderTopWidth: props => props.focusBorderTopWidth,
    borderWidth: props => props.focusBorderWidth,
    bottom: props => props.focusBottom,
    boxShadow: props => props.focusBoxShadow,
    boxSizing: props => props.focusBoxSizing,
    clear: props => props.focusClear,
    clip: props => props.focusClip,
    cursor: props => props.focusCursor,
    display: props => props.focusDisplay,
    float: props => props.focusFloat,
    height: props => props.focusHeight,
    left: props => props.focusLeft,
    margin: props => props.focusMargin,
    marginBottom: props => props.focusMarginBottom,
    marginLeft: props => props.focusMarginLeft,
    marginRight: props => props.focusMarginRight,
    marginTop: props => props.focusMarginTop,
    maxHeight: props => props.focusMaxHeight,
    maxWidth: props => props.focusMaxWidth,
    minHeight: props => props.focusMinHeight,
    minWidth: props => props.focusMinWidth,
    objectFit: props => props.focusObjectFit,
    objectPosition: props => props.focusObjectPosition,
    opacity: props => props.focusOpacity,
    outline: props => props.focusOutline,
    outlineColor: props => props.focusOutlineColor,
    outlineOffset: props => props.focusOutlineOffset,
    outlineStyle: props => props.focusOutlineStyle,
    outlineWidth: props => props.focusOutlineWidth,
    overflow: props => props.focusOverflow,
    overflowWrap: props => props.focusOverflowWrap,
    overflowX: props => props.focusOverflowX,
    overflowY: props => props.focusOverflowY,
    padding: props => props.focusPadding,
    paddingBottom: props => props.focusPaddingBottom,
    paddingLeft: props => props.focusPaddingLeft,
    paddingRight: props => props.focusPaddingRight,
    paddingTop: props => props.focusPaddingTop,
    pointerEvents: props => props.focusPointerEvents,
    position: props => props.focusPosition,
    right: props => props.focusRight,
    top: props => props.focusTop,
    verticalAlign: props => props.focusVerticalAlign,
    visibility: props => props.focusVisibility,
    width: props => props.focusWidth,
    zIndex: props => props.focusZIndex,
  },

  '&:hover': {
    background: props => props.hoverBackground,
    backgroundAttachment: props => props.hoverBackgroundAttachment,
    backgroundBlendMode: props => props.hoverBackgroundBlendMode,
    backgroundClip: props => props.hoverBackgroundClip,
    backgroundColor: props => props.hoverBackgroundColor,
    backgroundImage: props => props.hoverBackgroundImage,
    backgroundOrigin: props => props.hoverBackgroundOrigin,
    backgroundPosition: props => props.hoverBackgroundPosition,
    backgroundRepeat: props => props.hoverBackgroundRepeat,
    backgroundSize: props => props.hoverBackgroundSize,
    border: props => props.hoverBorder,
    borderBottom: props => props.hoverBorderBottom,
    borderBottomColor: props => props.hoverBorderBottomColor,
    borderBottomLeftRadius: props => props.hoverBorderBottomLeftRadius,
    borderBottomRightRadius: props => props.hoverBorderBottomRightRadius,
    borderBottomStyle: props => props.hoverBorderBottomStyle,
    borderBottomWidth: props => props.hoverBorderBottomWidth,
    borderCollapse: props => props.hoverBorderCollapse,
    borderColor: props => props.hoverBorderColor,
    borderImage: props => props.hoverBorderImage,
    borderImageOutset: props => props.hoverBorderImageOutset,
    borderImageRepeat: props => props.hoverBorderImageRepeat,
    borderImageSlice: props => props.hoverBorderImageSlice,
    borderImageSource: props => props.hoverBorderImageSource,
    borderImageWidth: props => props.hoverBorderImageWidth,
    borderLeft: props => props.hoverBorderLeft,
    borderLeftColor: props => props.hoverBorderLeftColor,
    borderLeftStyle: props => props.hoverBorderLeftStyle,
    borderLeftWidth: props => props.hoverBorderLeftWidth,
    borderRadius: props => props.hoverBorderRadius,
    borderRight: props => props.hoverBorderRight,
    borderRightColor: props => props.hoverBorderRightColor,
    borderRightStyle: props => props.hoverBorderRightStyle,
    borderRightWidth: props => props.hoverBorderRightWidth,
    borderSpacing: props => props.hoverBorderSpacing,
    borderStyle: props => props.hoverBorderStyle,
    borderTop: props => props.hoverBorderTop,
    borderTopColor: props => props.hoverBorderTopColor,
    borderTopLeftRadius: props => props.hoverBorderTopLeftRadius,
    borderTopRightRadius: props => props.hoverBorderTopRightRadius,
    borderTopStyle: props => props.hoverBorderTopStyle,
    borderTopWidth: props => props.hoverBorderTopWidth,
    borderWidth: props => props.hoverBorderWidth,
    bottom: props => props.hoverBottom,
    boxShadow: props => props.hoverBoxShadow,
    boxSizing: props => props.hoverBoxSizing,
    clear: props => props.hoverClear,
    clip: props => props.hoverClip,
    cursor: props => props.hoverCursor,
    display: props => props.hoverDisplay,
    float: props => props.hoverFloat,
    height: props => props.hoverHeight,
    left: props => props.hoverLeft,
    margin: props => props.hoverMargin,
    marginBottom: props => props.hoverMarginBottom,
    marginLeft: props => props.hoverMarginLeft,
    marginRight: props => props.hoverMarginRight,
    marginTop: props => props.hoverMarginTop,
    maxHeight: props => props.hoverMaxHeight,
    maxWidth: props => props.hoverMaxWidth,
    minHeight: props => props.hoverMinHeight,
    minWidth: props => props.hoverMinWidth,
    objectFit: props => props.hoverObjectFit,
    objectPosition: props => props.hoverObjectPosition,
    opacity: props => props.hoverOpacity,
    outline: props => props.hoverOutline,
    outlineColor: props => props.hoverOutlineColor,
    outlineOffset: props => props.hoverOutlineOffset,
    outlineStyle: props => props.hoverOutlineStyle,
    outlineWidth: props => props.hoverOutlineWidth,
    overflow: props => props.hoverOverflow,
    overflowWrap: props => props.hoverOverflowWrap,
    overflowX: props => props.hoverOverflowX,
    overflowY: props => props.hoverOverflowY,
    padding: props => props.hoverPadding,
    paddingBottom: props => props.hoverPaddingBottom,
    paddingLeft: props => props.hoverPaddingLeft,
    paddingRight: props => props.hoverPaddingRight,
    paddingTop: props => props.hoverPaddingTop,
    pointerEvents: props => props.hoverPointerEvents,
    position: props => props.hoverPosition,
    right: props => props.hoverRight,
    top: props => props.hoverTop,
    verticalAlign: props => props.hoverVerticalAlign,
    visibility: props => props.hoverVisibility,
    width: props => props.hoverWidth,
    zIndex: props => props.hoverZIndex,
  },
}

export default universalStyles