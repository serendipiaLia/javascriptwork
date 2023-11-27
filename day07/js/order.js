// order.html과 연결
let check = document.getElementById("shippingInfo");

// 주문 정보
let billingName = document.getElementById("billingName");
let billingTel = document.getElementById("billingTel");
let billingAddr = document.getElementById("billingAddr");

// 베송 정보
let shippingName = document.getElementById("shippingName");
let shippingTel = document.getElementById("shippingTel");
let shippingAddr = document.getElementById("shippingAddr");

// event 연결하기
check.addEventListener('click', function(){
    if(check.checked){ // check.checked == true 
        shippingName.value = billingName.value; // 주문정보의 이름을 배송정보이름에 저장
        shippingTel.value = billingTel.value;
        shippingAddr.value = billingAddr.value;
    }else{
        shippingName.value = "";
        shippingTel.value = "";
        shippingAddr.value = "";
    }
})


