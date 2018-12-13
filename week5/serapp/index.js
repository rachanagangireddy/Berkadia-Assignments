/**
program demonstrating a microservice using node.js
*/

function add(a,b)
{
    return a+b;
}


module.exports=(req,res)=>{
    const result=(add(1,2))?'added':'error';
    return{
        data:result
    };
}





/**
 * output will appear if you type 
 * >>npm start
 * starts micro and specifies a port no
 * then go to localhost and specified port output appears
 * output:--
 * {
 * "data":"added"
 * }
 */
