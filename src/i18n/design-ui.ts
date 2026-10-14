import type {Locale} from './locales';
const labels:Record<Locale,{saved:string;save:string;savedState:string;empty:string}>={
 ko:{saved:'저장한 카메라',save:'카메라 저장',savedState:'저장됨',empty:'저장한 카메라가 없어요. 목록에서 카메라 저장을 누르면 여기에 모아 볼 수 있어요.'},
 en:{saved:'Saved cameras',save:'Save camera',savedState:'Saved',empty:'No saved cameras yet. Select Save camera in the directory.'},
 'en-in':{saved:'Saved cameras',save:'Save camera',savedState:'Saved',empty:'No saved cameras yet. Select Save camera in the directory.'},
 'en-gb':{saved:'Saved cameras',save:'Save camera',savedState:'Saved',empty:'No saved cameras yet. Select Save camera in the directory.'},
 'en-us':{saved:'Saved cameras',save:'Save camera',savedState:'Saved',empty:'No saved cameras yet. Select Save camera in the directory.'},
 ms:{saved:'Kamera disimpan',save:'Simpan kamera',savedState:'Disimpan',empty:'Belum ada kamera disimpan. Pilih Simpan kamera dalam senarai.'},
 'zh-cn':{saved:'已保存的摄像头',save:'保存摄像头',savedState:'已保存',empty:'尚未保存摄像头。请在列表中选择保存摄像头。'},
 'zh-tw':{saved:'已儲存的攝影機',save:'儲存攝影機',savedState:'已儲存',empty:'尚未儲存攝影機。請在列表中選擇儲存攝影機。'},
 ja:{saved:'保存したカメラ',save:'カメラを保存',savedState:'保存済み',empty:'保存したカメラはありません。一覧でカメラを保存してください。'},
 ru:{saved:'Сохранённые камеры',save:'Сохранить камеру',savedState:'Сохранено',empty:'Сохранённых камер пока нет. Выберите камеру в списке и сохраните её.'},
 es:{saved:'Cámaras guardadas',save:'Guardar cámara',savedState:'Guardada',empty:'Todavía no hay cámaras guardadas. Guarda una cámara desde el listado.'}
};
export const getDesignUI=(locale:Locale)=>labels[locale]||labels.en;
