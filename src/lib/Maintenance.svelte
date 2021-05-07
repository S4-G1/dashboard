<style>
.maintains{
    min-height: 290px;
    width: 37px;
    padding: 10px;
    display: block;
}
#maintains-container{
    height: 90%;
}

#maintains-container > div:first-child {
    height: 50%; 
    background-color: lightgreen;
} 

#maintains-container > div:last-child{
    height: 50%; 
    background-color:lightgreen;
}

#maintains-bottom{
  display: flex;
  margin-top: 20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#maintains-bottom > .iconify {
    justify-content: center;
    align-items: center;
    height: 10%;
    color: #525252;
    font-size: 30px;
}

.maintain-overlay {
    position: relative;
    height: 0;
    left: 3px;
    top: -20px;
}
</style>


<div class="maintains">
    <div id="maintains-container">
        <div style="height: 79%;"></div>
        <div style="height: 21%; background: lightgreen;"></div>
    </div>
    <div class="maintain-overlay">
        <div id="maintains-overlay">21%</div>
    </div>


    
</div>