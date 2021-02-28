<template>
  <div class="home">

    <section class="hero-section">
      <div class="row mx-0">
        <div class="col-md-9 hero-col mt-5 text-center mx-auto">
          <h1 class="hero-title">Unique lists to unique personalities.</h1>
          <h6 class="hero-subtitle">
            See what others do. Learn what others do.
            <br>
            Be the other for others.
          </h6>
          <button class="make-list-btn">
            <router-link to="/register" v-if="!$store.state.isUserLoggedIn">Make a List</router-link>
            <router-link :to="'/profile/' + $store.state.user.id" v-else>Make a List</router-link>
          </button>
          <div class="col-sm-8 col-md-6 mx-auto img-col">
            <img src="@/assets/girl.svg" alt="">
          </div>
        </div>
      </div>
    </section>

    <section class="intro-section">
      <div class="row mx-0 intro-row">
        <div class="col-md-10 mx-auto">
          <h2 class="intro-title text-center">
            Handle your daily tasks.
          </h2>
          <p class="intro-text">
            With Misket, you can manage  easily your day. Organising your daily lists
            can improve your productivity
            You can see what other people
            do through the search box. Just type the user's name.
          </p>
          <div class="handle-btn-container">
            <router-link to="/register" v-if="!$store.state.isUserLoggedIn">Join Us</router-link>
            <router-link :to="'/profile/' + $store.state.user.id" v-else>Join Us</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="developer-section">
        <div class="row mx-0">
          <div class="text-center">
            <h2 class="developer-note">
              Contact
            </h2>
            <p class="developer-text">
              I developed Misket for portfolio stuff.
              You can contact me at <a href="mailto:duhanmeric@gmail.com">duhanmeric@gmail.com</a>
            </p>
            <div class="handle-btn-container">
              <a href="#" class="all-notes-btn">Coming Soon</a>
            </div>
          </div>
        </div>
    </section>

    <app-footer class="footer"></app-footer>

  </div>
</template>

<script>
import Footer from '@/components/Footer';

export default {
  name: 'Home',
  components: {
    'app-footer': Footer
  }
}
</script>

<style>
.home{
  height: 100%;
}

.hero-section{
  padding: 0 20px;
}

.hero-section .row{
  padding: 5rem 0;
}

.hero-title{
  font-size: 48px;
  font-weight: 700;
  color: #212121;
}

.hero-subtitle{
  font-size: 18px;
  font-weight: 400;
  margin: 36px 0 32px 0;
  color: #212121;
  font-family: 'Roboto Mono', monospace;
  letter-spacing: -0.5px;
  line-height: 130%;
}

.make-list-btn{
  border: none;
  background: #00ba63;
  width: 200px;
  height: 55px;
  border-radius: 7px;
}

.make-list-btn a{
  font-family: 'Roboto Mono', monospace;
  letter-spacing: -0.5px;
  text-decoration: none;
  color: white;
  font-size: 18px;
}

.img-col{
  margin: 70px 0 22px 0;
}

.img-col img{
  width: 100%;
  height: 100%;
}

.intro-section{
  background: #f8f8f8;
  padding: 12rem 0;
}

.intro-title{
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 30px;
}

.intro-text{
  font-size: 18px;
  line-height: 175%;
  margin: 36px auto;
  font-family: 'Roboto Mono', monospace;
  text-align: center;
  width: 75%;
}

.developer-section{
  padding: 12rem 0;
  width: 100%;
}

.developer-note{
  font-size: 42px;
  font-weight: 600;
}

.developer-text{
  font-size: 18px;
  line-height: 175%;
  font-family: 'Roboto Mono', monospace;
  width: 75%;
  margin: 36px auto;
}

.handle-btn-container{
  display: flex;
  justify-content: center;
  align-items: center;
}

.handle-btn-container a{
  border: none;
  background: #00ba63;
  height: 55px;
  border-radius: 8px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  text-decoration: none;
  color: white;
  font-family: 'Roboto Mono', monospace;
}

@media screen and (min-width:320px) and (max-width:576px){
  .hero-section{
    padding: 0 0px;
  }

  .hero-section .row{
    padding: 2rem 20px;
  }

  .developer-section,.intro-section{
    padding: 7rem 0;
  }

  .intro-row{
    width: 90%;
    margin: 0 auto!important;
  }

  .hero-col{
    width: 100%;
  }

  .hero-title{
    font-size: 36px;
  }

  .hero-subtitle{
    font-size: 16px;
  }

  .make-list-btn,.handle-btn-container a{
    height: 45px;
  }

  .make-list-btn a{
    font-size: 16px;
  }

  .intro-title,.developer-note{
    font-size: 30px;
    margin-bottom: 40px;
  }

  .intro-text,.developer-text{
    font-size: 16px;
  }

  .all-notes-btn{
    height: 50px;
    width: 250px;
    font-size: 18px;
    margin-bottom: 50px;
  }
}

@media screen and (min-width:576px) and (max-width:992px){
  .intro-section,.developer-section{
    padding: 7rem 20px;
  }
  .intro-title,.developer-note{
    font-size: 40px;
  }
  .intro-text,.developer-text{
    font-size: 18px;
    margin-bottom: 40px;
  }
  .all-notes-btn{
    height: 50px;
    width: 250px;
    font-size: 18px;
  }
}

@media screen and (min-width:1024px) {
  .img-col img{
    width: 400px;
    height: 427px;
  }
}
</style>
