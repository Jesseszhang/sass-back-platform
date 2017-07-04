<div class="date-time-stage" :class="[themeClass]">
  <div class="date-time-box" @click.stop>
    <input
      :placeholder="placeholder"
      v-el:input
      v-model="value"
      v-datetimepicker="{config: config}"/>
    <icon class="calendar-icon" name="calendar"></icon>
  </div>
</div>
