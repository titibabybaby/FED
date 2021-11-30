

const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");

//show input error message
function showError(input,message){
    const formControl=input.parentElement; //.parentElement只读属性,返回指定元素的父元素。
    formControl.className='form-control error'; //.className 属性设置或返回元素的 class 属性。
    const small=formControl.querySelector('small');
    small.innerText=message;
}

//show success outline
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}

//check email is valid
function checkEmail(input){
    //正则表达式
    const re = /^[a-z,A-Z,0-9]+@[a-z,A-Z]+.[a-z,A-Z]+$/;
    if(re.test(input.value.trim())){
        //trim() 方法用于删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等
        showSuccess(input);
    }else{
        showError(input,'Email is not valid');
    }
}

//check required fields
function checkRequired(inputArr){
    let isRequired=false;
    inputArr.forEach(function(input){
        if(input.value.trim()===''){ //用jquery的方法去除文本框值的2端的空格,相当于输入为空
            showError(input,`${getFieldName(input)} is required`); //jQuery中$(function())等同于$(document).ready(function())，意思很简单，就是等页面加载完毕之后，才开始执行函数。
            isRequired=true; //required 属性是一个布尔属性。规定必需在提交表单之前填写输入字段。 注意：required 属性适用于下面的 input 类型：text、search、url、tel、email、password、date pickers、number、checkbox、radio 和 file。
        }else{
             showSuccess(input);
        }
    });
    return isRequired;
}

//get fieldname
function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);//stringObject.slice(start,end)方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。下标从0开始，end没有，则到结尾
}
//toUppercase 是把字符串中的小写字母转换成大写字母。charAt 是返回指定索引位置的字符。substring 是返回一个新的字符。


//check input length
function checkLength(input,min,max){
    if(input.value.length<min){
        showError(
            input,
            `${getFieldName(input)} must be at least ${min} characters`
        );
    }else if(input.value.length>max){
        showError(
            input,
            `${getFieldName(input)} must be less than ${max} characters`
        );
    }else{
        showSuccess(input);
    }
}

//check passwords match
function checkPasswordsMatch(input1,input2){
    if(input1.value!==input2.value){
        showError(input2,'passwords do not match');
    }
}

//event listeners事件监听，当点击submit时，开始执行函数function(e)
form.addEventListener('submit',function(e){
    e.preventDefault(); //方法，属于该事件的默认操作将不会发生,eg：单击“提交”按钮，阻止其提交表单，单击链接，防止链接跟随 URL
    if(!checkRequired([username,email,password,password2])){
        checkLength(username,3,15);
        checkLength(password,6,25);
        checkEmail(email);
        checkPasswordsMatch(password,password2);
    }

});
