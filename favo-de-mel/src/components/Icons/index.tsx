import { createElement, memo } from 'react'
import dynamic from 'next/dynamic'

const createSvg = (name: EIcons) =>
  createElement(dynamic(() => import(`./svg/${name}`), { ssr: false }))

export enum EIcons {
  Add = 'add',
  AddUser = 'add-user',
  AddRole = 'add-role',
  AddQuote = 'add-quote',
  ArrowDown = 'arrow-down-s-line',
  ArrowLeft = 'arrow-left-line',
  ArrowLineDown = 'arrow-line-down',
  ArrowLineUp = 'arrow-line-up',
  ArrowRight = 'arrow-right-line',
  Bag = 'bag',
  Brand = 'brand',
  Bookmark = 'bookmark',
  Calendar = 'calendar',
  CheckLine = 'check-line',
  CloseCircle = 'close-circle-fill',
  CloseLine = 'close-fill',
  DeleteBin = 'delete-bin-line',
  Download = 'download',
  DownloadCloud = 'download-cloud-2-line',
  EditLine = 'edit-line',
  EyeLine = 'eye-line',
  EyeOff = 'eye-off-line',
  FacebookBox = 'facebook-box-fill',
  Filter = 'filter',
  FileCopy = 'file-copy-2-line',
  Filter2Line = 'filter-2-line',
  Grid = 'grid',
  Heart = 'heart-line',
  Home = 'home',
  Image = 'image-line',
  Information = 'information',
  Instagram = 'instagram-line',
  LinkedinBox = 'linkedin-box-fill',
  List = 'list',
  Lock = 'lock',
  Logo = 'logo',
  Notes = 'notes',
  Menu = 'menu-line',
  Minus = 'minus',
  Move = 'move',
  Play = 'play',
  PlayMini = 'play-mini',
  Print = 'print',
  Question = 'question',
  Quote = 'quote',
  SearchLine = 'search-line',
  Save = 'save',
  Square2x2 = 'square-two-two',
  Square3x3 = 'square-3-x-3',
  Tag = 'tag',
  ThreeGrid = 'three-grid',
  Trash5 = 'trash5',
  TwoGrid = 'two-grid',
  UploadCloud = 'upload-cloud-2-line',
  User3Line = 'user-3-line',
  Watermark = 'watermark',
  Zoom = 'zoom-line'
}

export type TSvg = {
  icon: EIcons
  color?: string
  className?: string
  onClick?: () => void
}

const Svg: React.FC<TSvg> = ({ icon, color, className, ...props }) => (
  <div
    className={className}
    style={{ color: color || 'inherit', display: 'flex' }}
    {...props}
  >
    {icon && createSvg(icon)}
  </div>
)

export default memo(Svg)
