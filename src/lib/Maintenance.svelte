<script>
    import Tools24 from "carbon-icons-svelte/lib/Tools24";
</script>

<style>
body {
	 font-family: 'Open Sans', sans-serif;
	 text-align: center;
}
 .maintenance-container {
	 max-width: 90px;
	 margin: 0 auto;
	 padding: 30px;
     position: relative;
     top:-520px; left: 800px;
}
 .goal-maintenance {
	 position: relative;
	 height: 100%;
	 padding-left: 30px;
}

 .goal-maintenance .maintenance-wrap {
	 position: relative;
	 height: 100%;
	 background: lightgray;
	 border: 1px solid lightgray;
	 border-radius: 3px;
	 overflow: hidden;
}

 .goal-maintenance .maintenance {
	 position: absolute;
	 width: 100%;
	 height: 100%;
	 background: lightgreen;
	 transform: translateY(100%);
	 transition: all 0.2s;
}
 .goal-maintenance .maintenance-info {
	 position: relative;
	 margin: 10px;
}
 .goal-maintenance .maintenance-info .maintenance-info-inner {
	 padding: 10px;
	 background: green;
	 border-radius: 3px;
	 color: white;
	 text-align: center;
     font-size: small;
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
 
</style>


<div class="maintenance-container" style="height: 500px;">
    <div class="goal-maintenance">
      <div class="maintenance-wrap">
        <div class="maintenance" style="transform: translateY(55%);">
          <div class="maintenance-info">
            <div class="maintenance-info-inner">
              21%
            </div>
          </div>
        </div>
        <span class="maintenance-label"></span>
      </div>
      <div id="maintains-bottom">
        <div id="maintains-bottom > .iconify">
            <Tools24/>
        </div>
    </div>
    </div> <!-- /.goal-maintenance -->
  </div>