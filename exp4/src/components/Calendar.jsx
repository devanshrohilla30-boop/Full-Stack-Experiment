import { memo, useMemo } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/react/daygrid";
import timeGridPlugin from "@fullcalendar/react/timegrid";
import interactionPlugin from "@fullcalendar/react/interaction";

const Calendar = memo(function Calendar({
  posts,
  onEventChange,
}) {
  const events = useMemo(() => {
    return posts.map((post) => ({
      id: post.id,
      title: `${post.platform} - ${post.title}`,
      start: post.date,
      backgroundColor: post.color,
      borderColor: post.color,
    }));
  }, [posts]);

  return (
    <div className="calendar-wrapper">
      <FullCalendar
        plugins={[
          dayGridPlugin,
          timeGridPlugin,
          interactionPlugin,
        ]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={events}
        editable={true}
        selectable={true}
        eventDrop={onEventChange}
        eventResize={onEventChange}
        height="auto"
      />
    </div>
  );
});

export default Calendar;