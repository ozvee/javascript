/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


modules: [
    {
        NAME: 'MatModLab Framework engine module',
        VERSION: '',
        TITLE: '',
        DESCRIPTION: '',
        INDEX: 5,
        call: function (user_input_form) {
            //Method global veriables
            //var
            //System variables
            var longComput,
                    calculationsConfirmed = false,
                    calcTimeMs = 0,
                    calculations_performed = false,
                    currentModule = this;

            //This is what function do:
            //
            //Reding input values (and cheking them to be correct)
            read(user_input_form);
            //Check hardness
            longComput = long_computation();
            //If long calculations, prompt user to continue
            if (longComput)
                calculationsConfirmed = confirm(MML.const.msg.long_calculations);
            if (!longComput || (longComput && calculationsConfirmed))
                calculate();
            return out();

            //Sub-functions, working in this:
            //
            function read(HTMLForm) {

            }
            function long_computation() {
                /**/return false;
            }
            function calculate() {
                //System local variables
                var timeStart = window.performance.now();
                //Method local variables
                //var
                
                calcTimeMs = window.performance.now() - timeStart;
                calculations_performed = true;
            }
            function out() {
                var output_multiline = '';
                if (calculations_performed)
                {

                }
                else
                    output_multiline = '-----Calculations refused-----';
                return output_multiline;
            }
        }
    }
];