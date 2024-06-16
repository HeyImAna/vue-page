<script setup>
//icons
import IconOne from './svg/IconOne.vue'
import IconTwo from './svg/IconTwo.vue'
import IconThree from './svg/IconThree.vue'
import IconFour from './svg/IconFour.vue'
import IconFive from './svg/IconFive.vue'
import IconSix from './svg/IconSix.vue'
</script>

<template>
  <div class="wrap">
    <h2>Плюсы использования сервиса «Компас» для анализа штрафов</h2>
    <div class="grid">
      <div class="card">
        <IconOne style="min-width: 59.33px" />
        <div class="card__text">
          <h4>Неограниченый автопарк</h4>
          <p>Можно добавить неограниченное кол-во машин и водителей</p>
        </div>
      </div>
      <div class="card">
        <IconTwo style="min-width: 59.55px" />
        <div class="card__text">
          <h4>Сокращение затрат до 50%</h4>
          <p>
            Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время
            оплатить по скидке
          </p>
        </div>
      </div>
      <div class="card">
        <IconThree style="min-width: 53.66px" />
        <div class="card__text">
          <h4>Безопасность</h4>
          <p>Данные передаются в зашифрованном виде, они доступны только получателю</p>
        </div>
      </div>
      <div class="card">
        <IconFour style="min-width: 59px" />
        <div class="card__text">
          <h4>Уведомление о погашении</h4>
          <p>
            Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП
          </p>
        </div>
      </div>
      <div class="card">
        <IconFive style="min-width: 53px" />
        <div class="card__text">
          <h4>Квитанция об оплате</h4>
          <p>
            После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об
            успешной оплате.
          </p>
        </div>
      </div>
      <div class="card">
        <IconSix style="min-width: 59px" />
        <div class="card__text">
          <h4>Все история сохраняется по каждой машине</h4>
          <p>
            Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику
            по штрафам
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '../scss/util/index' as u;

.wrap {
  margin-bottom: u.rem(85);
}

h2 {
  text-align: center;
  margin-bottom: u.rem(33);
}

.grid {
  justify-items: center;
  display: grid;
  gap: u.rem(35);
  grid-template-columns: repeat(auto-fill, minmax(u.rem(275), 1fr));

  .card {
    max-width: u.rem(362);
    max-height: u.rem(151);
    padding: u.rem(40) u.rem(20);
    border: u.rem(1) solid #eeeff1;
    background-color: #fbfcfd;
    border-radius: u.rem(10);
    display: flex;
    align-items: center;
    gap: u.rem(15);

    @media (max-width: 78em) {
      max-width: u.rem(520);
      max-height: u.rem(200);
    }

    &__text {
      display: flex;
      flex-direction: column;
      gap: u.rem(10);

      h4 {
        font-weight: var(--fw-bold);
        color: var(--clr-title);
      }

      p {
        font-size: u.rem(15);
      }
    }
  }
}
</style>
