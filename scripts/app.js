var _banano_bananojobrecruiter=new banano_bananojobrecruiter();
/* App */
function banano_bananojobrecruiter() {var _B;this.__1="bananojobrecruiter";this.__2="BANano Job Recruiter";this.__3="c:\laragon\www";this.__4="1.00";this.__5="";this.banano_ready=function() {if (_B==null) _B=this;var __6,__7,__8,__9,__a;__6=null;__6=u("#body");__7={};__7={};__7.mode="no-cors";__8={};__9="";__a={};__a=fetch("./assets/index.html",__7);__a.then(async function(__8) {return __8.text();}).then(async function(__9) {__6.html(__9);BANanoExec("recruiter", window);});};} 
function recruiter() { 
    $(document).ready(function () { 
            var chart = document.getElementById('chart').getContext('2d'), 
                gradient = chart.createLinearGradient(0, 0, 0, 450); 
 
            gradient.addColorStop(0, 'rgba(0, 199, 214, 0.32)'); 
            gradient.addColorStop(0.3, 'rgba(0, 199, 214, 0.1)'); 
            gradient.addColorStop(1, 'rgba(0, 199, 214, 0)'); 
 
 
            var data = { 
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 
                datasets: [{ 
                    label: 'Applications', 
                    backgroundColor: gradient, 
                    pointBackgroundColor: '#00c7d6', 
                    borderWidth: 1, 
                    borderColor: '#0e1a2f', 
                    data: [60, 45, 80, 30, 35, 55, 25, 80, 40, 50, 80, 50] 
                }] 
            }; 
 
            var options = { 
                responsive: true, 
                maintainAspectRatio: true, 
                animation: { 
                    easing: 'easeInOutQuad', 
                    duration: 520 
                }, 
                scales: { 
                    yAxes: [{ 
                        ticks: { 
                            fontColor: '#5e6a81' 
                        }, 
                        gridLines: { 
                            color: 'rgba(200, 200, 200, 0.08)', 
                            lineWidth: 1 
                        } 
                    }], 
                    xAxes: [{ 
                        ticks: { 
                            fontColor: '#5e6a81' 
                        } 
                    }] 
                }, 
                elements: { 
                    line: { 
                        tension: 0.4 
                    } 
                }, 
                legend: { 
                    display: false 
                }, 
                point: { 
                    backgroundColor: '#00c7d6' 
                }, 
                tooltips: { 
                    titleFontFamily: 'Poppins', 
                    backgroundColor: 'rgba(0,0,0,0.4)', 
                    titleFontColor: 'white', 
                    caretSize: 5, 
                    cornerRadius: 2, 
                    xPadding: 10, 
                    yPadding: 10 
                } 
            }; 
 
            var chartInstance = new Chart(chart, { 
                type: 'line', 
                data: data, 
                options: options 
            }); 
 
            document.querySelector('.open-right-area').addEventListener('click', function () { 
                document.querySelector('.app-right').classList.add('show'); 
            }); 
 
            document.querySelector('.close-right').addEventListener('click', function () { 
                document.querySelector('.app-right').classList.remove('show'); 
            }); 
 
            document.querySelector('.menu-button').addEventListener('click', function () { 
                document.querySelector('.app-left').classList.add('show'); 
            }); 
 
            document.querySelector('.close-menu').addEventListener('click', function () { 
                document.querySelector('.app-left').classList.remove('show'); 
            }); 
        }); 
    } 
window.addEventListener('online', function() {if (typeof _banano_bananojobrecruiter['banano_online']==="function") {_banano_bananojobrecruiter.banano_online();}});window.addEventListener('offline', function() {if (typeof _banano_bananojobrecruiter['banano_offline']==="function") {_banano_bananojobrecruiter.banano_offline();}});var BANversion=1626038238006;window.document.addEventListener("readystatechange", BANLoadChecker, true);function BANLoadChecker() {if (window.document.readyState=="complete") {_banano_bananojobrecruiter.banano_ready();}}