var result1 = document.getElementById("result1"),
    result2 = document.getElementById("result2");

function YtoDelta() {
        "use strict";
        var    /* Y to delta */
            R1 = document.getElementById("R1").value,
            R2 = document.getElementById("R2").value,
            R3 = document.getElementById("R3").value;
            
        /* Ra & Rb & Rc _Variables */
        var Ra = (R1 * R2 + R2 * R3 + R3 * R1) / R1,
            Rb = (R1 * R2 + R2 * R3 + R3 * R1) / R2,
            Rc = (R1 * R2 + R2 * R3 + R3 * R1) / R3;
        
        /* Showing The Result */
        var firstResult =
        "Ra is " + Ra + "<br>" +
        "Rb is " + Rb + "<br>" +
        "Rc is " + Rc;
        
        /* Our Conditions */
        if ((isNaN(R1) || isNaN(R2) || isNaN(R3)) && (R1==="" || R2==="" || R3==="")) {
            result1.innerHTML = "!سايب خانة فاضية وكمان كاتب كلام ؟" + "<br>" +"<span dir=\"rtl\">اكتب قيم R1 و R2 و R3 صح</span>";
        } else if (isNaN(R1) || isNaN(R2) || isNaN(R3)) {
            result1.innerHTML = "مفيش مقاومة كلام" + "<br>" + "(اكتب قيمة)";
        } else if (R1==="" || R2==="" || R3==="") {
            result1.innerHTML = "سايب خانة فاضية ليه ؟";
        } else {
            result1.innerHTML = firstResult;
        }
    }
    
function DeltaToY() {
        "use strict";
    var
        /* delta to Y */
        _Ra = document.getElementById("Ra").value,
        _Rb = document.getElementById("Rb").value,
        _Rc = document.getElementById("Rc").value;

        
        /* For Test */
        /*
        + "<br>" + _Ra + " _ " + _Rb + " _ " + _Rc
        + "<br>" + (_Rb * _Rc) / (_Ra + _Rb + _Rc);
        */

        /* convert to float */
        var
        Ra = parseFloat(_Ra),
        Rb = parseFloat(_Rb),
        Rc = parseFloat(_Rc);
        
        /* R1 & R2 & R3 _Variables */
        var R1 = ((Rb * Rc)/(Ra + Rb + Rc)),
            R2 = (Ra * Rc) / (Ra + Rb + Rc),
            R3 = (Rb * Ra) / (Ra + Rb + Rc);

        var secResult = 
        "R1 is " + R1 + "<br>" +
        "R2 is " + R2 + "<br>" +
        "R3 is " + R3
        /* Our Conditions */
        if ((isNaN(_Ra) || isNaN(_Rb) || isNaN(_Rc)) && (_Ra==="" || _Rb==="" || _Rc==="")) {
            result2.innerHTML = "!سايب خانة فاضية وكمان كاتب كلام ؟" + "<br>" +"<span dir=\"rtl\">اكتب قيم Ra و Rb و Rc صح</span>";
        } else if (isNaN(_Ra) || isNaN(_Rb) || isNaN(_Rc)) {
            result2.innerHTML = "مفيش مقاومة كلام" + "<br>" + "(اكتب قيمة)";
        } else if (_Ra==="" || _Rb==="" || _Rc==="") {
            result2.innerHTML = "سايب خانة فاضية ليه ؟";
        } else {
            result2.innerHTML = secResult;
        }

        /*
        console.log((15*15) / (15+15+15));
        console.log(_Ra);
        console.log(_Rb);
        console.log(_R1);
        console.log(_Rb*_Rc);
        console.log((parseFloat(_Ra) + parseFloat(_Rb) + parseFloat(_Rc)));
        console.log(16 + 15 + 10);
        console.log(225/151515)
        console.log(Ra + Rb + Rc)
        */
}
