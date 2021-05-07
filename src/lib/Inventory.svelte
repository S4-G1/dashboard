  <style>
      .inventory-st {
      max-width: 360px;
      width: 100%;
      padding: 10px;
      display: block;
      position:relative;
      top: 50px; left: 71%;
  }
      .inventory-top  {
      color: black;
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
  }
      .inventory-container {
      color:black;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
  }
      .inventory-inner {
      color:black;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      padding-bottom: 10px;
  }
      .inventory-inner > div {
  }
      .inventory-inner > div:first-child {
      background-color: lightgreen;
      width: 50%;
      height: 50px;
  }
      .inventory-inner > div:nth-child(2n) {
      background-color: lightgrey;
      width: 50%;
  }
      .inventory-overlay {
      position: relative;
      width: 100%;
      top: -50px;
      display: flex;
      margin: 0px;
      color: black;
  }
      .inventory-overlay > p {
      height: 0;
  }

  .inventory-overlay > p:first-child {
      margin: 10px auto;
  }

  .inventory-overlay > p:last-child {
      margin: 10px auto;
  }




  </style>


  <div class="inventory-st">
      <div class="inventory-top">
          <p>Inventory Status</p>
      </div>
      <div class="inventory-container">
              <div class="BARLEY inventory-inner" id="BARLEY-bar">
                  <div class="inventory-inner > div:first-child"></div>
                  <div class="inventory-inner > div:nth-child(2n)"></div>
                  <div class="BARLEY inventory-overlay" id="BARLEY-value">
                      <p>BARLEY</p>
                      <p>0.100kg</p>
                </div>
                </div>
            <div class="MALT inventory-inner" id="MALT-bar">
                  <div class="inventory-inner > div:first-child"></div>
                  <div class="inventory-inner > div:nth-child(2n)"></div>
                  <div class="MALT inventory-overlay" id="MALT-value">
                      <p>MALT</p>
                      <p>0.100kg</p>
                </div>
                </div>
            <div class="HOPS inventory-inner" id="HOPS-bar">
                  <div class="inventory-inner > div:first-child"></div>
                  <div class="inventory-inner > div:nth-child(2n)"></div>
                  <div class="HOPS inventory-overlay" id="HOPS-value">
                      <p>HOPS</p>
                      <p>0.100kg</p>
                </div>
                </div>
            <div class="WHEAT inventory-inner" id="WHEAT-bar">
                  <div class="inventory-inner > div:first-child"></div>
                  <div class="inventory-inner > div:nth-child(2n)"></div>
                  <div class="WHEAT inventory-overlay" id="WHEAT-value">
                      <p>WHEAT</p>
                      <p>0.100kg</p>
                </div>
                </div>
            <div class="YEAST inventory-inner" id="YEAST-bar">
                  <div class="inventory-inner > div:first-child"></div>
                  <div class="inventory-inner > div:nth-child(2n)"></div>
                  <div class="YEAST inventory-overlay" id="YEAST-value">
                      <p>YEAST</p>
                      <p>0.100kg</p>
                </div>
                </div>
          </div>
   </div>
