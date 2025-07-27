import {
  Lock,
  TriangleAlert,
  FileText,
  X,
  ScanFace,
  ShieldCheck,
  Ban,
  MessageSquareText,
  Eye,
  CircleAlert,
  Key,
  ArrowLeft,
  LockIcon,
  SaveAll,
  Delete,
  Trash,
  FileQuestion,
  Info,
  Inbox,
  Mailbox,
  Trash2,
} from "lucide-react";

import WideButton from "../WideButton";

interface ContentProps {
  setContent: (_: string) => void;
  closeTray: () => void;
}

export const OptionsMenu = ({ setContent, closeTray }: ContentProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center pb-6 ">
        <h1 className=" tracking-tight text-white text-xl">Settings</h1>
        <button className="" onClick={closeTray}>
          <X className="h-5 w-5 text-white" />
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <WideButton
          variant="secondary"
          onClick={() => setContent("privateKey")}
        >
          <Lock className="h-4 w-4 tracking-tight" /> 
          <h2 className="tracking-tight ">
            View Password
          </h2>
        </WideButton>
        <WideButton className="hidden" variant="secondary" onClick={() => setContent("recovery")}>
          <FileText className="h-4 w-4" />
          <h2 className="tracking-tight ">
            View Recovery Phrase
          </h2>
        </WideButton>
        <WideButton variant="secondary" onClick={() => setContent("about")}>
          <Info className="h-4 w-4" />
          <h2 className="tracking-tight ">
            About MessageMe
          </h2>
        </WideButton>
        <WideButton variant="destructive" onClick={() => setContent("remove")}>
          <Trash2 className="h-4 w-4" />
          <h2 className="tracking-tight ">
            Clear archive
          </h2>
        </WideButton>
      </div>
    </div>
  );
};

export const PrivateKey = ({ setContent, closeTray }: ContentProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 pb-6 ">
        <div className="flex justify-end items-end ">
          <Eye className="h-8 w-8 hidden text-gray-700" />
          <button className="" onClick={closeTray}>
            <X className="h-5 w-5 text-white" />
          </button>
        </div>
        <h1 className="tracking-tight text-xl"></h1>
        <p className="tracking-tight text-white">
          You can view your password by clicking the reveal button below, ensure you do not expose it or your private messages can be accessed.
        </p>
      </div>
      <div>
        <div className="flex gap-4 w-full">
          <WideButton
            cta
            variant="secondary"
            onClick={() => setContent("options")}
          >
            Cancel
          </WideButton>
          {/* <WideButton cta onClick={() => setContent("options")}>
            <ScanFace className="h-4 w-4" />
            Reveal
          </WideButton> */}
          <button className="text-white flex-1 px-[15px] gap-2 w-full inline-flex items-center justify-center rounded-full text-sm font-medium bg-[rgb(52,199,89)]"
          onClick={() => setContent("keyReveal")}
          >
            <ScanFace className="h-4 w-4" />
            Reveal
          </button>
        </div>
      </div>
    </div>
  );
};

export const RecoveryPhrase = ({ setContent, closeTray }: ContentProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3 pb-6 border-b-[1px] border-neutral-100">
        <div className="flex justify-end items-center ">
          <button className="" onClick={closeTray}>
            <X className="h-5 w-5 text-white" />
          </button>
        </div>
        <h1 className="tracking-tight text-xl">Secret Recovery Phrase</h1>
        <p className="tracking-tight text-white">
          Your Secrete Recovery Phrase is used to gain access to your wallet in
          case you lose your key. Keep it secret and secure at all times.
        </p>
      </div>
      <div>
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex items-center gap-4 tracking-tight text-black text-sm">
            <ShieldCheck className="h-5 w-5" />
            <p className="font-medium">Keep your Secret Phrase safe</p>
          </div>
          <div className="flex items-center gap-4 tracking-tight text-black text-sm">
            <MessageSquareText className="h-5 w-5" />
            <p className="font-medium">Don't share it with anyone else</p>
          </div>
          <div className="flex items-center gap-4 tracking-tight text-black text-sm">
            <Ban className="h-5 w-5" />
            <p className="font-medium">If you lose it, we can't recover it</p>
          </div>
        </div>
        <div className="flex gap-4 w-full">
          <WideButton
            cta
            variant="secondary"
            onClick={() => setContent("options")}
          >
            Cancel
          </WideButton>
          {/* <WideButton cta onClick={() => setContent("options")}>
            <ScanFace className="h-4 w-4" />
            Reveal
          </WideButton> */}
          <button className="text-white flex-1 px-[15px] gap-2 w-full inline-flex items-center justify-center rounded-full text-sm font-medium bg-[rgb(52,199,89)]"
          onClick={() => setContent("phraseKey")}
          >
            <ScanFace className="h-4 w-4" />
            Reveal
          </button>
        </div>
      </div>
    </div>
  );
};

export const About = ({ setContent, closeTray }: ContentProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start ">
          <Mailbox className="h-8 w-8 text-gray-700" />
          <button className="" onClick={closeTray}>
            <X className="h-5 w-5 text-gray-700" />
          </button>
        </div>
        <h1 className="font-semibold tracking-tight text-xl"></h1>
        <p className="tracking-tight text-[15px] text-black">
          MessageMe is a secure online platform for sending and recieving electronic messages, it is a free to use, web-based email service accessible through web browsers.
        </p>
        <p className="tracking-tight text-[15px] text-black">
          MessageMe is integrated with our other service InMeet, enabling productivity and smooth collaboration
        </p>
        <div className='text-black justify-end gap-1 flex-col items-end flex'>
            <h1 className="tracking-tighter font-semibold items-center">MessageMe &copy; 2025</h1>
            <h1 className="tracking-tighter items-center">By SephDesigns</h1>
        </div>
      </div>
      <div>
        <div className="flex gap-4 w-full">
          <WideButton
            cta
            variant="secondary"
            onClick={() => setContent("options")}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </WideButton>
        </div>
      </div>
    </div>
  );
};

export const RemoveWallet = ({ setContent, closeTray }: ContentProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <div className="flex justify-end items-center ">
          <button className="" onClick={closeTray}>
            <X className="h-5 w-5 " />
          </button>
        </div>
        <h1 className=" tracking-tight text-xl">Are you sure?</h1>
        <p className="tracking-tight text-white">
          You can delete your archived and spam messages by clicking the delete button.
        </p>
      </div>
      <div>
        <div className="flex gap-4 w-full">
          <WideButton
            cta
            variant="destructive"
            onClick={() => setContent("removeEmails")}
          >
            Delete
          </WideButton>
          <WideButton
            cta
            variant="secondary"
            onClick={() => setContent("options")}
          >
            Cancel
          </WideButton>
        </div>
      </div>
    </div>
  );
};

export const KeyReveal = ({ setContent, closeTray }: ContentProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start ">
          <Key className="h-8 w-8 text-gray-700" />
          <button className="" onClick={closeTray}>
            <X className="h-5 w-5 text-gray-700" />
          </button>
        </div>
        <h1 className="font-semibold tracking-tight text-xl">Private Key</h1>
        <p className="tracking-tight text-black">
          Ensure you keep your private key safe, and don't share it with anyone.
        </p>
        <div className="grid gap-2 grid-cols-5">
          <h2 className="bg-gray-300 p-3 flex justify-center">0</h2>
          <h2 className="bg-gray-300 p-3 flex justify-center">1</h2>
          <h2 className="bg-gray-300 p-3 flex justify-center">2</h2>
          <h2 className="bg-gray-300 p-3 flex justify-center">4</h2>
          <h2 className="bg-gray-300 p-3 flex justify-center">5</h2>
        </div>
      </div>
      <div>
        <div className="flex gap-4 w-full">
          <WideButton
            cta
            variant="secondary"
            onClick={() => setContent("options")}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </WideButton>
        </div>
      </div>
    </div>
  );
};

export const PhraseKey = ({ setContent, closeTray }: ContentProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start ">
          <LockIcon className="h-8 w-8 text-gray-700" />
          <button className="" onClick={closeTray}>
            <X className="h-5 w-5 text-gray-700" />
          </button>
        </div>
        <h1 className="font-semibold tracking-tight text-xl">Recovery Phrase</h1>
        <p className="tracking-tight text-black">
          Ensure you keep your recovery phrase safe, and don't share it with anyone.
        </p>
        <div className="grid gap-2 grid-cols-4">
          <h2 className="">email</h2>
          <h2 className="">inbox</h2>
          <h2 className="">secure</h2>
          <h2 className="">file</h2>
          <h2 className="">clip</h2>
          <h2 className="">filter</h2>
          <h2 className="">recover</h2>
          <h2 className="">store</h2>
        </div>
      </div>
      <div>
        <div className="flex gap-4 w-full">
          <WideButton
            cta
            variant="secondary"
            onClick={() => setContent("options")}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </WideButton>
        </div>
      </div>
    </div>
  );
};

export const BackUp = ({ setContent, closeTray }: ContentProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-start ">
          <SaveAll className="h-8 w-8 text-gray-700" />
          <button className="" onClick={closeTray}>
            <X className="h-5 w-5 text-gray-700" />
          </button>
        </div>
        <h1 className="font-semibold tracking-tight text-xl">Backup Successful</h1>
        <p className="tracking-tight text-[15px] text-black">
          You have successfully saved all your emails. You can access them in your dashboard.
        </p>
      </div>
      <div>
        <div className="flex gap-4 w-full">
          <WideButton
            cta
            variant="secondary"
            onClick={() => setContent("options")}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </WideButton>
        </div>
      </div>
    </div>
  );
};

export const RemoveEmails = ({ setContent, closeTray }: ContentProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <div className="flex justify-end items-start ">
          <button className="" onClick={closeTray}>
            <X className="h-5 w-5 " />
          </button>
        </div>
        <h1 className="tracking-tight text-xl">Deletion Complete</h1>
        <p className="tracking-tight text-[15px] ">
          You have successfully deleted your backup email data. You can no longer access them in your dashboard
        </p>
      </div>
      <div>
        <div className="flex gap-4 w-full">
          <WideButton
            cta
            variant="secondary"
            onClick={() => setContent("options")}
          >
            <ArrowLeft className="h-4 w-4" />
            Back to settings
          </WideButton>
        </div>
      </div>
    </div>
  );
};