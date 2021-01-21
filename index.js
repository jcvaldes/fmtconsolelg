let styles = 'color: white; font-size: 30px; display:block; text-align: center;'; 
module.exports = {
  success,
  info,
  error,
  warn,
  // dummy
}
/**
 * Da estilos de success por consola del navegador
 * @param {string} message 
 */
function success(message) {
  const styles = this.styles + 'background-color: green;';
  console.log(styles)
  showLog(message, styles)
}
/**
 * Da estilos de info por consola del navegador
 * @param {string} message 
 */

function info(message) {
  const styles = this.styles + 'background-color: #80bfff;';
  showLog(message, styles)
}
/**
 * Da estilos de error por consola del navegador
 * @param {string} message 
 */

function error(message) {
  const styles = this.styles + 'background-color: #ff3300;';
  showLog(message, styles)
}
/**
 * Da estilos de warning por consola del navegador
 * @param {string} message 
 */
function warn(message) {
  const styles = this.styles + 'background-color: #ff9900;';
  showLog(message, styles)
}
/**
 * Muestra el mensaje por consola del navegador
 * @param {string} message 
 */
function showLog(message) {
  console.log('%c%s', styles, message)
}

// function dummy() {
//   return 'Hola'
// }