import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";

const COLORS = {
  navy: "#050816",
  card: "#0b0f24",
  cardBorder: "rgba(124, 58, 237, 0.18)",
  purple: "#7C3AED",
  purpleLight: "#A78BFA",
  blue: "#2563EB",
  white: "#ffffff",
};

const CATEGORY_ICON = {
  deposit: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 3v12m0 0l-5-5m5 5l5-5M5 19h14" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  withdrawal: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 21V9m0 0l-5 5m5-5l5 5M5 5h14" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  trading: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 19h16M7 15l4-5 3 3 5-7" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  rewards: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 8a3 3 0 100-6 3 3 0 000 6z" stroke="#A78BFA" strokeWidth="2" />
      <path d="M6 9l1.5 11L12 18l4.5 2L18 9" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  announcement: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 10v4h4l5 5V5L8 10H4z" stroke="#60A5FA" strokeWidth="2" strokeLinejoin="round" />
      <path d="M17 8a5 5 0 010 8" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  security: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" stroke="#A78BFA" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9.5 12l1.8 1.8L14.5 10" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  market: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 5v14h16" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 15l3-4 3 2 4-6" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  system: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="#A78BFA" strokeWidth="2" />
      <path d="M19 12a7 7 0 00-.15-1.45l2-1.55-2-3.46-2.35.95a7 7 0 00-2.5-1.45L13.6 2h-3.2l-.4 2.54a7 7 0 00-2.5 1.45l-2.35-.95-2 3.46 2 1.55A7 7 0 005 12c0 .5.05.98.15 1.45l-2 1.55 2 3.46 2.35-.95a7 7 0 002.5 1.45l.4 2.54h3.2l.4-2.54a7 7 0 002.5-1.45l2.35.95 2-3.46-2-1.55c.1-.47.15-.95.15-1.45z" stroke="#A78BFA" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ),
};

const DEFAULT_NOTIFICATIONS = [
  {
    id: "n1",
    category: "deposit",
    title: "Deposit Successful",
    description: "Your BTC deposit has been credited.",
    time: "2 minutes ago",
    read: false,
  },
  {
    id: "n2",
    category: "withdrawal",
    title: "Withdrawal Pending",
    description: "Your USDT withdrawal is awaiting approval.",
    time: "8 minutes ago",
    read: false,
  },
  {
    id: "n3",
    category: "rewards",
    title: "New Reward",
    description: "Claim your weekly trading reward.",
    time: "Today",
    read: false,
  },
  {
    id: "n4",
    category: "market",
    title: "Market Alert",
    description: "Bitcoin moved +5.4%.",
    time: "Today",
    read: true,
  },
  {
    id: "n5",
    category: "security",
    title: "Security Reminder",
    description: "Enable Two-Factor Authentication.",
    time: "Yesterday",
    read: true,
  },
];

function AnimatedButton({ onClick, children, style, disabled }) {
  const [pressed, setPressed] = useState(false);
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onTouchStart={() => setPressed(true)}
      onTouchEnd={() => setPressed(false)}
      style={{
        ...style,
        transform: pressed ? "scale(0.94)" : "scale(1)",
        transition: "transform 0.15s ease, opacity 0.2s ease",
        opacity: disabled ? 0.4 : 1,
        cursor: disabled ? "default" : "pointer",
      }}
    >
      {children}
    </button>
  );
}

function NotificationCard({ notification, index, onMarkRead }) {
  return (
    <div
      onClick={() => !notification.read && onMarkRead(notification.id)}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        padding: "14px 16px",
        borderRadius: 14,
        background: notification.read
          ? COLORS.card
          : "linear-gradient(135deg, rgba(124,58,237,0.10), rgba(37,99,235,0.06))",
        border: `1px solid ${notification.read ? "rgba(255,255,255,0.05)" : COLORS.cardBorder}`,
        marginBottom: 10,
        cursor: notification.read ? "default" : "pointer",
        animation: `stCardIn 0.45s cubic-bezier(0.16,1,0.3,1) both`,
        animationDelay: `${index * 70}ms`,
      }}
    >
      <div
        style={{
          width: 38,
          height: 38,
          minWidth: 38,
          borderRadius: 11,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(124, 58, 237, 0.12)",
          boxShadow: "0 0 14px rgba(124, 58, 237, 0.25)",
        }}
      >
        {CATEGORY_ICON[notification.category] || CATEGORY_ICON.system}
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ color: COLORS.white, fontSize: 14.5, fontWeight: 600, marginBottom: 3 }}>
          {notification.title}
        </div>
        <div
          style={{
            color: "rgba(255,255,255,0.55)",
            fontSize: 13,
            lineHeight: 1.4,
            marginBottom: 6,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {notification.description}
        </div>
        <div style={{ color: "rgba(167, 139, 250, 0.65)", fontSize: 11.5, fontWeight: 500 }}>
          {notification.time}
        </div>
      </div>

      {!notification.read && (
        <div
          style={{
            width: 9,
            height: 9,
            minWidth: 9,
            borderRadius: "50%",
            background: COLORS.purpleLight,
            boxShadow: `0 0 8px ${COLORS.purpleLight}`,
            marginTop: 5,
            animation: "stDotPulse 1.8s ease-in-out infinite",
          }}
        />
      )}
    </div>
  );
}

function EmptyState() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 24px",
        textAlign: "center",
        animation: "stCardIn 0.5s ease both",
      }}
    >
      <div
        style={{
          width: 84,
          height: 84,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, rgba(124,58,237,0) 70%)",
          marginBottom: 18,
        }}
      >
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3a6 6 0 00-6 6v3.5c0 .8-.3 1.5-.8 2.1L4 16.5h16l-1.2-1.9c-.5-.6-.8-1.3-.8-2.1V9a6 6 0 00-6-6z"
            stroke={COLORS.purpleLight}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path d="M9.5 19a2.5 2.5 0 005 0" stroke={COLORS.purpleLight} strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>
      <div style={{ color: COLORS.white, fontSize: 16, fontWeight: 700, marginBottom: 6 }}>
        No notifications yet
      </div>
      <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 13.5, maxWidth: 260, lineHeight: 1.5 }}>
        We'll notify you when something important happens.
      </div>
    </div>
  );
}

export default function NotificationDrawer({ initialNotifications }) {
  const [notifications, setNotifications] = useState(initialNotifications || DEFAULT_NOTIFICATIONS);
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [dragY, setDragY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const touchStartY = useRef(0);
  const drawerRef = useRef(null);

  const unreadCount = useMemo(() => notifications.filter((n) => !n.read).length, [notifications]);

  const closeDrawer = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      setDragY(0);
    }, 280);
  }, []);

  const openDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleMarkRead = useCallback((id) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  }, []);

  const handleMarkAllRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }, []);

  const handleClearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) closeDrawer();
    },
    [closeDrawer]
  );

  const handleTouchStart = useCallback((e) => {
    touchStartY.current = e.touches[0].clientY;
    setIsDragging(true);
  }, []);

  const handleTouchMove = useCallback(
    (e) => {
      if (!isDragging) return;
      const delta = e.touches[0].clientY - touchStartY.current;
      if (delta > 0) setDragY(delta);
    },
    [isDragging]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    if (dragY > 90) {
      closeDrawer();
    } else {
      setDragY(0);
    }
  }, [dragY, closeDrawer]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeDrawer();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeDrawer]);

  return (
    <>
      <style>{`
        @keyframes stCardIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes stDotPulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes stDrawerSlideDown {
          from { opacity: 0; transform: translateY(-24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes stBackdropIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .st-notif-scroll::-webkit-scrollbar { width: 5px; }
        .st-notif-scroll::-webkit-scrollbar-thumb { background: rgba(124,58,237,0.35); border-radius: 8px; }
      `}</style>

      {/* Bell trigger */}
      <AnimatedButton
        onClick={openDrawer}
        style={{
          position: "relative",
          width: 42,
          height: 42,
          borderRadius: 12,
          border: "1px solid rgba(255,255,255,0.08)",
          background: COLORS.card,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9"
            stroke={COLORS.white}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M13.7 21a2 2 0 01-3.4 0" stroke={COLORS.white} strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        {unreadCount > 0 && (
          <span
            style={{
              position: "absolute",
              top: -4,
              right: -4,
              minWidth: 18,
              height: 18,
              padding: "0 4px",
              borderRadius: 9,
              background: `linear-gradient(135deg, ${COLORS.purple}, ${COLORS.blue})`,
              color: COLORS.white,
              fontSize: 10.5,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 0 10px rgba(124, 58, 237, 0.7)`,
            }}
          >
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </AnimatedButton>

      {isOpen && (
        <div
          onClick={handleBackdropClick}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background: "rgba(5, 8, 22, 0.55)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            animation: isClosing ? "stBackdropIn 0.28s ease reverse" : "stBackdropIn 0.28s ease",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "clamp(8px, 3vw, 24px)",
          }}
        >
          <div
            ref={drawerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              width: "min(94vw, 420px)",
              maxHeight: "min(80vh, 640px)",
              background: COLORS.navy,
              border: `1px solid ${COLORS.cardBorder}`,
              borderRadius: 22,
              boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(124,58,237,0.15)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              transform: `translateY(${isClosing ? -24 : dragY}px)`,
              opacity: isClosing ? 0 : 1,
              transition: isDragging ? "none" : "transform 0.3s cubic-bezier(0.16,1,0.3,1), opacity 0.28s ease",
              animation: isClosing ? "none" : "stDrawerSlideDown 0.38s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", padding: "10px 0 2px" }}>
              <div style={{ width: 36, height: 4, borderRadius: 3, background: "rgba(255,255,255,0.15)" }} />
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 18px 14px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: COLORS.white, fontSize: 17, fontWeight: 700 }}>Notifications</span>
                {unreadCount > 0 && (
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: COLORS.white,
                      background: `linear-gradient(135deg, ${COLORS.purple}, ${COLORS.blue})`,
                      borderRadius: 8,
                      padding: "2px 7px",
                    }}
                  >
                    {unreadCount} new
                  </span>
                )}
              </div>

              <div style={{ display: "flex", gap: 8 }}>
                <AnimatedButton
                  onClick={handleMarkAllRead}
                  disabled={unreadCount === 0}
                  style={{
                    fontSize: 11.5,
                    fontWeight: 600,
                    color: COLORS.purpleLight,
                    background: "rgba(124, 58, 237, 0.12)",
                    border: "1px solid rgba(124, 58, 237, 0.25)",
                    borderRadius: 9,
                    padding: "6px 9px",
                  }}
                >
                  Mark all read
                </AnimatedButton>
                <AnimatedButton
                  onClick={handleClearAll}
                  disabled={notifications.length === 0}
                  style={{
                    fontSize: 11.5,
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.6)",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 9,
                    padding: "6px 9px",
                  }}
                >
                  Clear all
                </AnimatedButton>
              </div>
            </div>

            <div
              className="st-notif-scroll"
              style={{
                overflowY: "auto",
                padding: "14px 14px 20px",
                flex: 1,
              }}
            >
              {notifications.length === 0 ? (
                <EmptyState />
              ) : (
                notifications.map((n, i) => (
                  <NotificationCard key={n.id} notification={n} index={i} onMarkRead={handleMarkRead} />
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
          }
