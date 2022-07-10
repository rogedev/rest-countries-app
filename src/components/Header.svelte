<div class="header">
  <div class="headerWrapper">
    <h1>Where in the world?</h1>
    <a class="darkModeBtn" href="/">
      <div><i class="far fa-moon" /></div>
      <p>Dark Mode</p>
    </a>
  </div>
</div>

<style>
  .header {
    background-color: #fff;
    padding: 0 1.5rem;
    box-shadow: 1px 1px 7px 0px rgb(0, 0, 0, 0.1);
    position: relative;
  }
  .headerWrapper {
    display: flex;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  .darkModeBtn {
    background-color: transparent;
    display: inline-block;
    cursor: pointer;
    color: #000;
    padding-top: 25px;
    font-weight: 600;
    display: flex;
    margin-top: 5px;
  }
  .darkModeBtn p {
    margin: 0 0 0 7px;
  }
  .darkModeBtn:active {
    position: relative;
    top: 1px;
  }
  @media (max-width: 875px) {
    .header {
      padding: 0 15px;
    }
    h1 {
      font-size: 18px;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .darkModeBtn {
      padding-top: 30px;
    }
  }
</style>
