<div class="data-picker-stage {{theme | themeClass}} {{ calendar.show ? 'open' : ''}}">
  <div class="view-box" @click.stop="open($event)">
    <span>{{ (value || placeholder) | trim }}</span>
    <icon name="calendar"></icon>
  </div>
  <calendar
   :show.sync="calendar.show"
   :type="calendar.type"
   :value.sync="calendar.value"
   :x="calendar.x"
   :y="calendar.y"
   :begin.sync="calendar.begin"
   :end.sync="calendar.end"
   :range.sync="calendar.range"
   :weeks="calendar.weeks"
   :months="calendar.months"
   :sep.sync="calendar.sep">

   </calendar>
</div>
