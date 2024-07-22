function getDayName(input) { 
        const date = new Date(input);
        return date.toLocaleDateString('en-US' );
}
    
export default getDayName;