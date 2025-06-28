/**
 * シミュレートする台
 */
export class Machine {
  /**
   * コンストラクタ
   * @param setting 設定（１～６）
   */
  constructor (private setting: number) {
    if (this.setting < 0 || this.setting > 6) {
      throw new Error('無効な設定値: ' + this.setting);
    }
  }
}