/**
 * v0 by Vercel.
 * @see https://v0.dev/t/U8U5AMSVYve
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Player() {
  return (
    <div className="bg-gray-950 px-4 py-2 flex items-center justify-between fixed inset-x-0 bottom-0">
      <div className="flex items-center gap-4">
        <Button size="icon" variant="ghost">
          <ForwardIcon className="text-white h-6 w-6" />
          <span className="sr-only">Previous</span>
        </Button>
        <Button size="icon" variant="ghost">
          <PlayIcon className="text-white h-6 w-6" />
          <span className="sr-only">Play</span>
        </Button>
        <Button size="icon" variant="ghost">
          <ForwardIcon className="text-white h-6 w-6" />
          <span className="sr-only">Next</span>
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button size="icon" variant="ghost">
          <VolumeIcon className="text-white h-6 w-6" />
          <span className="sr-only">Mute</span>
        </Button>
        <div className="w-32 h-2 bg-gray-800 rounded-full">
          <div
            className="bg-white h-2 rounded-full"
            style={{
              width: '50%',
            }}
          />
        </div>
        <Button size="icon" variant="ghost">
          <VolumeIcon className="text-white h-6 w-6" />
          <span className="sr-only">Unmute</span>
        </Button>
        <span className="text-white text-sm">00:00 / 00:00</span>
      </div>
      <div className="flex items-center gap-4">
        <Button size="icon" variant="ghost">
          <CaptionsIcon className="text-white h-6 w-6" />
          <span className="sr-only">Subtitles</span>
        </Button>
        <Button size="icon" variant="ghost">
          <SettingsIcon className="text-white h-6 w-6" />
          <span className="sr-only">Settings</span>
        </Button>
        <Button size="icon" variant="ghost">
          <ExpandIcon className="text-white h-6 w-6" />
          <span className="sr-only">Fullscreen</span>
        </Button>
        <Badge className="ml-2" variant="secondary">
          19
        </Badge>
      </div>
    </div>
  );
}

function CaptionsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
      <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
    </svg>
  );
}

function ExpandIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
      <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
      <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
      <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
    </svg>
  );
}

function ForwardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polyline points="15 17 20 12 15 7" />
      <path d="M4 18v-2a4 4 0 0 1 4-4h12" />
    </svg>
  );
}

function PlayIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function VolumeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    </svg>
  );
}
