import { Injectable, Logger } from '@nestjs/common'
import { KubernetesService } from '../core/kubernetes.service'
import { CreateAppDto } from './dto/create-app.dto'
import { UpdateAppDto } from './dto/update-app.dto'
import { Application, ApplicationSpec } from './entities/app.entity'
import * as k8s from '@kubernetes/client-node'
import * as nanoid from 'nanoid'

@Injectable()
export class AppsService {
  private readonly logger = new Logger(AppsService.name)
  constructor(public k8sClient: KubernetesService) {}

  // create app namespace
  async createAppNamespace(appid: string) {
    try {
      const namespace = new k8s.V1Namespace()
      namespace.metadata = new k8s.V1ObjectMeta()
      namespace.metadata.name = appid
      namespace.metadata.labels = {
        'laf.dev/appid': appid,
        'laf.dev/namespace.type': 'app',
      }
      const res = await this.k8sClient.coreV1Api.createNamespace(namespace)
      return res.body
    } catch (err) {
      this.logger.error(err)
      return null
    }
  }

  generateAppid(len: number) {
    const nano = nanoid.customAlphabet(
      '1234567890abcdefghijklmnopqrstuvwxyz',
      len || 6,
    )
    return nano()
  }

  async create(appid: string, dto: CreateAppDto) {
    // create app resources
    const app = new Application()
    app.metadata.name = dto.name
    app.metadata.namespace = appid
    app.spec = new ApplicationSpec({
      appid: appid,
      state: dto.state,
      region: dto.region,
      bundleName: dto.bundleName,
      runtimeName: dto.runtimeName,
    })

    try {
      const res = await this.k8sClient.objectApi.create(app.toJSON())
      return res.body
    } catch (error) {
      this.logger.error(error)
      return null
    }
  }

  findAll() {
    return `This action returns all apps`
  }

  findOne(id: number) {
    return `This action returns a #${id} app`
  }

  update(id: number, updateAppDto: UpdateAppDto) {
    return `This action updates a #${id} app`
  }

  remove(id: number) {
    return `This action removes a #${id} app`
  }
}
