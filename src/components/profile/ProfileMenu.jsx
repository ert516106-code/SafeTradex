import {
  ShieldCheck,
  Lock,
  KeyRound,
  Languages,
  Bell,
  Shield,
  Link2,
  FileText,
  Info,
  Headset,
} from "lucide-react";

import ProfileItem from "./ProfileItem";

export default function ProfileMenu({
  onOpenKYC,
  onOpenLanguage,
  onOpenNotifications,
  onOpenSecurity,
  onOpenBinding,
  onOpenTerms,
  onOpenAbout,
  onOpenSupport,
}) {
  return (
    <>
      <ProfileItem
        icon={ShieldCheck}
        title="KYC Verification"
        subtitle="Verify your identity"
        badge="Pending"
        color="#2563EB"
        onClick={onOpenKYC}
      />

      <ProfileItem
        icon={Lock}
        title="Fund Password"
        subtitle="Protect withdrawals"
        color="#8B5CF6"
        onClick={() => {}}
      />

      <ProfileItem
        icon={KeyRound}
        title="Login Password"
        subtitle="Update your password"
        color="#3B82F6"
        onClick={() => {}}
      />

      <ProfileItem
        icon={Languages}
        title="Language"
        subtitle="English"
        color="#06B6D4"
        onClick={onOpenLanguage}
      />

      <ProfileItem
        icon={Bell}
        title="Notifications"
        subtitle="Manage alerts"
        badge="2"
        color="#F59E0B"
        onClick={onOpenNotifications}
      />

      <ProfileItem
        icon={Shield}
        title="Security Center"
        subtitle="Recommended"
        color="#22C55E"
        onClick={onOpenSecurity}
      />

      <ProfileItem
        icon={Link2}
        title="Account Binding"
        subtitle="Email • Phone"
        color="#6366F1"
        onClick={onOpenBinding}
      />

      <ProfileItem
        icon={FileText}
        title="Terms of Service"
        subtitle="Legal information"
        color="#64748B"
        onClick={onOpenTerms}
      />

      <ProfileItem
        icon={Info}
        title="About SafeTrade"
        subtitle="Version & Platform"
        color="#0EA5E9"
        onClick={onOpenAbout}
      />

      <ProfileItem
        icon={Headset}
        title="Contact Support"
        subtitle="24/7 Customer Support"
        color="#EC4899"
        onClick={onOpenSupport}
      />
    </>
  );
}

     
