const IS_DEBUD = true;
export function DEBUD(tag = '', data) {
  if(IS_DEBUD)
    console.debug(tag, data)
}