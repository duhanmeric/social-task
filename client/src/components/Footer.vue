<template>
  <footer>
    <p class="author">
      made by duhanmeric
    </p>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
footer{
  border-top: 1px solid #bbb;
  padding: 0rem 0px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer p{
  font-family: "Roboto Mono", monospace;
  font-weight: 600;
}

@media screen and (min-width:320px) and (max-width:576px){
  .author{
    margin-bottom: 120px;
  }
  .author{
    width: 100%;
    color: black;
    padding: 1rem 0rem;
    border-top: 1px solid #bbb;
    text-align: center;
  }
}

@media screen and (min-width:576px){
  .author{
    margin-bottom: 0;
  }
}
</style>
