export const truncateText = (str, num)=>{
    if (str) {
        if (str.length < num) {
        return str; 
        }
        else{
            return str.slice(0, num) + '...';
        }
    }
    
}