export const dateFormat = (date) =>{
    let dformat = new Date(date);
    return `
    ${dformat.getDate()}
    ${dformat.toLocaleDateString("en-US", {month: 'short'})} 
    ${dformat.getFullYear()} 
    ${dformat.toLocaleString("en-US", {hour: 'numeric', minute: 'numeric', hour12: true})}`
    
}